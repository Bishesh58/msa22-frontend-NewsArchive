
export default function Thumbnail() {
  return (
    <div className="flex flex-col space-x-4">
      <h2>title goes here</h2>
      <img
        loading="lazy"
        src="https://s.yimg.com/os/creatr-uploaded-images/2021-08/1dcd9640-fafb-11eb-8fde-3d5cdabb0674"
        alt="cover"
        className="max-h-60 rounded-lg shadow-sm object-contain"
      />
      <p>description</p>
      <p>publishedAt: dd/mm/yy</p>
    </div>
  );
}
