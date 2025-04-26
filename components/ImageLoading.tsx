import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageLoading = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <FontAwesomeIcon icon={faSpinner} spin size="2xl" />
    </div>
  );
};

export default ImageLoading;
