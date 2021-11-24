import Image from "next/image";

export default function Banner(props) {
  const { title, description, imgUrl, width, height } = props;
  return (
    <div className="space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 lg:gap-x-8">
      <div className="flex items-center justify-center">
        <Image
          className="rounded-lg"
          src={imgUrl}
          width={width}
          height={height}
          alt={title}
          title={title}
          priority
        />
      </div>
      <div className="flex items-center justify-center text-left">
        <p className="text-lg text-black-300 md:text-xl">{description}</p>
      </div>
    </div>
  );
}
