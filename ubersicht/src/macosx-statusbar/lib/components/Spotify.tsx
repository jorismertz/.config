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

export default function Spotify() {
  const [data, setData] = React.useState<SpotifyData | null>(null);

  React.useEffect(() => {
    run(
      "~/.config/ubersicht/src/macosx-statusbar/lib/utils/getSpotify.fish"
    ).then((output) => {
      const parsed = SpotifyData.safeParse(JSON.parse(output));
      if (parsed.success) {
        setData(parsed.data);
      }
    });
  }, []);

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
