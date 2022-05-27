import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { Box, useToast } from "@chakra-ui/react";
import { useRegisterSW } from "virtual:pwa-register/react";
import SWUpdateMessage from "./update";

function SW() {
  const chakraToast = useToast();

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
      toast("Weathr is correctly installed", {
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
        render: () => (
          <SWUpdateMessage
            message="A new version of weathr is avalible!"
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
