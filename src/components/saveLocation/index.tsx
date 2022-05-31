import { useEffect, useState } from "react";
import IconBtn from "@/common/iconBtn";
import { nanoid } from "nanoid";
import { Heart } from "phosphor-react";
import { SaveLocation } from "@/interfaces/saveLocation";

const Index = ({ url, title, country }: SaveLocation) => {
  const [saved, setSaved] = useState(
    localStorage.savedLocations ? JSON.parse(localStorage.savedLocations) : []
  );
  const [find, setFind] = useState(false);

  useEffect(() => {
    localStorage.setItem("savedLocations", JSON.stringify(saved));
    if (saved.find((item: SaveLocation) => item.url === url)) {
      setFind(true);
    }
  }, [saved]);

  const handleSaveLocation = () => {
    const newLocation = {
      id: nanoid(),
      url: url,
      title: title,
      country: country,
    };
    if (find) {
      setSaved(saved.filter((item: SaveLocation) => item.url !== url));
      setFind(false);
    } else {
      setSaved([...saved, newLocation]);
      setFind(true);
    }
  };

  return (
    <IconBtn
      ariaLabel={find ? "Remove from saved locations" : "Save location"}
      icon={find ? <Heart size={22} weight="duotone" /> : <Heart size={22} />}
      onClick={handleSaveLocation}
    />
  );
};

export default Index;
