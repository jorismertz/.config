import { run, React } from "uebersicht";
import { z } from "zod";

const SpotifyData = z.object({
  status: z.string(),
  artist: z.string(),
  album: z.string(),
  track: z.string(),
  position: z.array(z.string()),
});

type SpotifyData = z.infer<typeof SpotifyData>;

export default function Spotify({ trigger }: { trigger: any }) {
  const [data, setData] = React.useState<SpotifyData | null>(null);

  // Load stored data to decrease loading time of widget
  React.useEffect(() => {
    if (data) return;
    const stored = window.localStorage.getItem("spotify");
    if (stored) {
      const parsed = SpotifyData.safeParse(JSON.parse(stored));
      if (parsed.success) {
        setData(parsed.data);
      }
    }
  }, [window]);

  React.useEffect(() => {
    console.log("Fetching spotify data");
    run(
      "~/.config/ubersicht/src/macosx-statusbar/lib/utils/getSpotify.fish"
    ).then((output) => {
      const parsed = SpotifyData.safeParse(JSON.parse(output));
      if (parsed.success) {
        setData(parsed.data);
        window.localStorage.setItem("spotify", JSON.stringify(parsed.data));
      }
    });
  }, [trigger]);

  if (!data) return null;

  return (
    <div className="widget-component">
      <p
        style={{
          width: "max-content",
        }}
      >
        {data?.track}
      </p>
    </div>
  );
}
