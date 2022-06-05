import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { useColorModeValue, useToast } from "@chakra-ui/react";
import { useRegisterSW } from "virtual:pwa-register/react";
import SWUpdateMessage from "./update";

function SW() {
  const chakraToast = useToast();
  const bg = useColorModeValue("bg.light", "bg.dark");

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);
  }, [setOfflineReady, setNeedRefresh]);

  useEffect(() => {
    if (offlineReady) {
      toast("Weathr has been installed, it now works offline!", {
        icon: "🥳",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (needRefresh) {
      chakraToast({
        position: "bottom",
        containerStyle: {
          zIndex: 1000,
          background: bg,
        },
        render: () => (
          <SWUpdateMessage
            message="A new version is avalible!"
            updateBtn={updateServiceWorker}
            closeBtn={close}
          />
        ),
      });
    }
  }, [close, needRefresh, offlineReady, updateServiceWorker]);

  return null;
}

export default SW;
