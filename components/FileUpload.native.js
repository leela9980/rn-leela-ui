//create a functional component called FileUpload

import React from "react";
import * as DocumentPicker from "expo-document-picker";
import { View } from "@/components/ui/";
import { Upload, FileText, Images, X } from "lucide-react-native";
import { ButtonIcon, ButtonText } from "@/components/ui/";
import { uploadMobileFile } from "../../firebaseApi/firebaseStorage.js";
import Button from "./Button.js";
import { useState } from "react";
import dayjs from "dayjs";
import { useAuthContext } from "../../common/auth/useAuthContext";
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetIcon,
  Icon,
  Text,
} from "@/components/ui/";
import * as ImagePicker from "expo-image-picker";

const FileUpload = ({
  onUpload,
  setIsUploading,
  isDisabled = false,
  variant = "outline",
  icon = Upload,
  text = "Upload",
  size = "lg",
  style,
  uploadPath,
  uploadType = "document", // document or image or both
  testID
}) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(-1);
  const [showActionsheet, setShowActionSheet] = useState(false);
  const context = useAuthContext();

  const uploadDocument = async () => {
    const document = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    uploadFile(document);
  };

  const uploadImage = async () => {
    // No permissions request is necessary for launching the image library
    const imageFile = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(imageFile);

    if (imageFile.canceled) {
      console.log("User did not select an image");
      endUpload();
      return;
    } else {
      imageFile.assets[0].size = imageFile.assets[0].fileSize;
      //imageFile.assets[0].mimeType = imageFile.assets[0].type;
      imageFile.assets[0].name = imageFile.assets[0].fileName;
    }

    uploadFile(imageFile);
  };

  const uploadFile = async (file) => {
    try {
      setLoading(true);
      setIsUploading && setIsUploading(true);

      if (file.canceled) {
        console.log("User did not select a document");
      } else {
        const result = await uploadMobileFile(file, progressCallback, {
          uploadPath,
        });

        onUpload({
          downloadURL: result.downloadURL,
          name: result.file.name,
          type: result.file.type || result.file.mimeType,
          size: result.file.size,
          uploadedAt: dayjs().format(),
          uploadedBy: context.user.uid,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      endUpload();
    }
  };

  const endUpload = () => {
    setLoading(false);
    setProgress(-1);
    setShowActionSheet(false);
    setIsUploading && setIsUploading(false);
  };
  const progressCallback = (progress) => {
    console.log("Progress: ", progress);
    setProgress(progress);
  };

  const onButtonClick = () => {
    if (process.env.EXPO_PUBLIC_LOCAL_USE_MOCKS === "true") {
      mockFileUpload();
      return;
    }
    try {
      if (uploadType === "document") {
        uploadDocument();
      } else if (uploadType === "image") {
        uploadImage();
      } else {
        setShowActionSheet(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const mockFileUpload = () => {
    console.log("Mocking file upload");
    if (uploadType === "image") {
      onUpload({
        downloadURL: "https://via.placeholder.com/150",
        name: "mockFile",
        type: "image/png",
        size: 150,
        uploadedAt: dayjs().format(),
        uploadedBy: context.user.uid,
      });
    } else {
      onUpload({
        downloadURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        name: "mockFile",
        type: "application/pdf",
        size: 150,
        uploadedAt: dayjs().format(),
        uploadedBy: context.user.uid,
      });
    }
  };

  return (
    <View>
      <Button
        variant={variant}
        onPress={onButtonClick}
        loading={loading}
        isDisabled={isDisabled}
        size={size}
        testID={testID}
        {...style}
      >
        {loading === false && <ButtonIcon as={icon} mr="$1" />}
        <ButtonText>
          {progress >= 0 && `${progress}%`} {text}
        </ButtonText>
      </Button>

      <Actionsheet
        isOpen={showActionsheet}
        onClose={() => setShowActionSheet(false)}
        snapPoints={[25]}
        closeOnOverlayClick={true}
      >
        <ActionsheetContent maxHeight="75%">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>

          <Text fontWeight="$medium">Choose File Type</Text>
          <ActionsheetItem onPress={uploadDocument}>
            <ActionsheetIcon>
              <Icon as={FileText} />
            </ActionsheetIcon>
            <ActionsheetItemText>Document</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={uploadImage}>
            <ActionsheetIcon>
              <Icon as={Images} />
            </ActionsheetIcon>
            <ActionsheetItemText>Image</ActionsheetItemText>
          </ActionsheetItem>

          <ActionsheetItem onPress={() => setShowActionSheet(false)}>
            <ActionsheetIcon>
              <Icon as={X} />
            </ActionsheetIcon>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </View>
  );
};

export default FileUpload;
