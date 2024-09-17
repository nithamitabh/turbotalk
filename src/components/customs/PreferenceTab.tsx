"use client";
import { MoonIcon, SunIcon, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { usePreferences } from "@/store/usePrefrence";
import { useSound } from "use-sound";
const PreferenceTab = () => {
  const { setTheme } = useTheme();
  const { soundEnabled, setSoundEnabled } = usePreferences();
  const [playMouseClick] = useSound("/sounds/mouse-click.mp3");
  const [playSoundOn] = useSound("/sounds/sound-on.mp3", { volume: 0.3 });
  const [playSoundOff] = useSound("/sounds/sound-off.mp3", { volume: 0.3 });

  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2">
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
          setTheme("light");
          soundEnabled && playMouseClick();
        }}
      >
        <SunIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => {
            setTheme("dark");
            soundEnabled && playMouseClick();
          }}
      >
        <MoonIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button variant={"outline"} size={"icon"}>
        {soundEnabled ? (
          <Volume2
            className="size-[1.2rem] text-muted-foreground"
            onClick={() => {setSoundEnabled(false);
             playSoundOff();
            }}
          />
        ) : (
          <VolumeX
            className="size-[1.2rem] text-muted-foreground"
            onClick={() => {setSoundEnabled(true);
                playSoundOn();
            }}
          />
        )}
      </Button>
    </div>
  );
};

export default PreferenceTab;
