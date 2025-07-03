import Image from "next/image";
import MainButton from "../ui-elements/button";
import { PointerHighlight } from "../ui/pointer-highlight";

export default function CourseCard({
  image,
  title,
  description,
  instructor,
  price,
  badge,
  highlight,
  colorName,
}: {
  image: string;
  title: string;
  description: string;
  instructor: string;
  price: string;
  badge?: string;
  highlight?: string;
  colorName?: string;
}) {
  return (
    <div className="rounded-xl shadow-md overflow-hidden transition text-white relative border md:border-0 p-4 md:p-0 border-[#212121]">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />

      <div className="md:p-4 space-y-2">
        {badge && (
          <span className="inline-block bg-[#fffbed] text-black text-[11px] font-semibold px-3 py-[1px] rounded-full">
            {badge}
          </span>
        )}

        <h2 className="text-lg font-semibold">
          {highlight && title.includes(highlight) ? (
            <span className="flex gap-2">
              {title.split(highlight)[0]}
              <PointerHighlight
                rectangleClassName={`bg-${colorName}-900 border-${colorName}-700 leading-loose`}
                pointerClassName={`text-${colorName}-500 h-3 w-3`}
                containerClassName="inline-block ml-1"
              >
                <span className="relative z-10">{highlight}</span>
              </PointerHighlight>
              {title.split(highlight)[1]}
            </span>
          ) : (
            title
          )}
        </h2>

        <p className="text-sm line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="text-sm">
            <p className="font-medium">{instructor}</p>
            <p className="text-xs">Instructor</p>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold">₹ {price}</p>
          </div>
        </div>

        <div className="grid place-items-center mt-8">
          <MainButton text="Enroll Now" />
        </div>
      </div>
    </div>
  );
}
