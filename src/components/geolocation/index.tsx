import { useState } from "react";
import toast from "react-hot-toast";
import { MapPin } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import IconBtn from "@/common/iconBtn";

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
          navigate(
            `/search/${position.coords.latitude},${position.coords.longitude}`
          );
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
    <IconBtn
      ariaLabel={message}
      onClick={getLocation}
      icon={<MapPin size={22} weight="bold" />}
      isLoading={loading}
      isDisabled={disabled}
    />
  );
};

export default Index;
