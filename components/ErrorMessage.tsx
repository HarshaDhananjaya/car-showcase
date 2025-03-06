import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

/**
 * ErrorMessage is a component that displays an error message.
 * The message is displayed in red color and is a paragraph.
 * It is used to display errors from the backend.
 * @param {{ children: React.ReactNode }} props - The props for the component.
 * @returns {JSX.Element} The ErrorMessage component.
 */
const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <Text
      className="text-red-600 mt-10 text-sm font-medium"
      as="p"
    >
      {children}
    </Text>
  );
};

export default ErrorMessage;
