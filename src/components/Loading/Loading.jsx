import { InfinitySpin } from "react-loader-spinner";
export default function Loading() {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color="#f06666"
      ariaLabel="infinity-spin-loading"
    />
  );
}