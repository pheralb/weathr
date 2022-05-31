import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { MapPin } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import CustomTooltip from "@/components/tooltip/";

type Props = {};

const Index = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("Geolocation");
  const navigate = useNavigate();

  const getLocation = () => {
    if (!navigator.geolocation) {
      setMessage("Geolocation is not supported by your browser.");
      setDisabled(true);
    } else {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          navigate(`/search/${position.coords.latitude},${position.coords.longitude}`);
          console.log(position.coords.latitude, position.coords.longitude);
          setLoading(false);
        },
        () => {
          toast(`Geolocation cannot be detected`, {
            icon: "😢",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          setLoading(false);
        }
      );
    }
  };

  return (
    <CustomTooltip message={message}>
      <IconButton
        variant="ghost"
        aria-label="Get Location"
        icon={<MapPin size={22} weight="bold" />}
        onClick={getLocation}
        isLoading={loading}
        isDisabled={disabled}
      />
    </CustomTooltip>
  );
};

export default Index;
