import { News } from "../../../typings";

interface Props {
  newItem: any;
}

export default function Thumbnail({ newItem }: Props) {
  console.log(
    new Date(newItem.published_at).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  );
  return (
    <div className="flex flex-col space-x-4 bg-white p-4 mr-4 space-y-4">
      <h2 className="text-2xl font-semibold">{newItem.title}</h2>
      <img
        loading="lazy"
        src={newItem.image_url}
        alt="cover"
        className="max-h-60 rounded-lg shadow-sm object-contain self-start "
      />
      <p>
        {newItem.snippet}{" "}
        <a href={newItem.url} target="_blank" className="text-blue-500">
          Read more
        </a>
      </p>

      <p>source - {newItem.source}</p>
      <p className="text-gray-400 text-sm">
        {new Date(newItem.published_at).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </p>
    </div>
  );
}
