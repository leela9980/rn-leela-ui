//create a functional component called FileUpload

import React from "react";
import * as DocumentPicker from "expo-document-picker";
import { View } from "@/components/ui/";
import { Upload } from "lucide-react-native";
import { ButtonIcon, ButtonText } from "@/components/ui/";
import { uploadWebFile } from "../../firebaseApi/firebaseStorage.js";
import Button from "./Button.js";
import { useState } from "react";
import dayjs from "dayjs";
import { useAuthContext } from "../../common/auth/useAuthContext";

const FileUpload = ({
  onUpload,
  type = "application/pdf",
  setIsUploading,
  isDisabled = false,
  variant = "outline",
  icon = Upload,
  text = "Upload",
  size = "lg",
  style,
  uploadPath,
  testID
}) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(-1);
  const context = useAuthContext();

  const picFile = async () => {
    setLoading(true);
    setIsUploading && setIsUploading(true);
    try {
      const document = await DocumentPicker.getDocumentAsync({
        type,
      });
      if (document.canceled) {
        console.log("User did not select a document");
        return;
      }

      const result = await uploadWebFile(document, progressCallback, {
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
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setProgress(-1);
      setIsUploading && setIsUploading(false);
    }
  };

  const progressCallback = (progress) => {
    console.log("Progress: ", progress);
    setProgress(progress);
  };

  return (
    <View testID={testID}>
      <Button
        variant={variant}
        onPress={async () => await picFile()}
        loading={loading}
        isDisabled={isDisabled}
        size={size}
        {...style}
      >
        {loading === false && <ButtonIcon as={icon} mr="$1" />}
        <ButtonText>
          {progress >= 0 && `${progress}%`} {text}
        </ButtonText>
      </Button>
    </View>
  );
};

export default FileUpload;
