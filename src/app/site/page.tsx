import Image from "next/image";
import previewImage from "@/../public/assets/preview.png";

export default function Home() {
  return (
    <>
      <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#3f3f3f2e_1px,transparent_1px),linear-gradient(to_bottom,#3f3f3f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <p className="text-center">Run your agency in one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[300px]">
            Zeal
          </h1>
        </div>
        <Image
          src={previewImage}
          alt="Preview image of zeal app"
          width={1200}
          height={1200}
          className="rounded-tl-xl rounded-tr-xl border-2 border-muted"
        />
        <div className="absolute top-[50%]right-0 bottom-0-left-0 z-10 bg-gradient-to-t dark:from-background "></div>
      </section>
    </>
  );
}
