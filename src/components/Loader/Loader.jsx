import { ThreeDots } from "react-loader-spinner";
export default function Loader(){
    return (
        <ThreeDots
          visible={true}
          height="40"
          width="40"
          color="blue"
          radius="5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      );
}