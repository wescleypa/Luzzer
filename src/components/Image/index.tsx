import { Box, BoxProps } from "@mui/material";

type ImageProps = BoxProps<"img">;

export default function Image(props: ImageProps) {
  return (
    <Box
      component="img"
      {...props}
    />
  );
}