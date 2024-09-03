import { Women, Men, Designer, Kids } from "@/data/navbarDropdownInfo";
import Link from "next/link";

const categories = { Women, Men, Designer, Kids };

const DesktopNavbar = () => {
  return (
    <div className="bg-black">
      <nav className="z-40 flex justify-center items-center gap-x-12">
        {Object.entries(categories).map(([key, value]) => (
          <div key={key} className="relative group">
            <div className="dropdown bg-black text-white cursor-pointer">
              <h2 className="text-base hover:bg-white hover:text-black hover:underline p-2  hover:transition-all hover:duration-150 hover:delay-150">{key}</h2>
            </div>

            {/* Dropdown */}
            <div className="shadow-lg z-40 absolute hidden group-hover:flex justify-center px-5 py-4 items-center bg-white w-[310px] text-[14px]">
              <div className="flex flex-wrap  translate-x-6 ">
                {value.map((category) => (
                
                  <div key={category.category} className="mb-8 w-1/2">
                    <h3 className="font-black text-base mb-2">{category.category}</h3>
                    
                    <ul className="flex flex-col space-y-1">
                      {category.items.map((item) => (
                        <li key={item.name} className="font-light">
                          <Link href={item.link} className="  text-black hover:text-blue-600">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default DesktopNavbar;
