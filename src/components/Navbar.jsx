import {react, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/UseMediaQuery";
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";


const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";
  

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">OUM</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button className="rounded-full  bg-red p-2"
          onClick={()=>setIsMenuToggled(!isMenuToggled)}>
            <CiMenuBurger className="text-4xl"/>
          </button> )}

          {/* mobile menu */}

          {!isDesktop && isMenuToggled  && (
            <div className="fixed right00 bottom-0 h-full w-full bg-[#89e4f2] ">
                <div className="flex justify-end p-12 ">
                    <button className="pr-12" onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                      <MdCancel className="text-5xl" />
                    </button>
                </div> 

                <div className="flex flex-col gap-10 text-3xl ml-[35%] text-deep-blue">
                    <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Skills"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            </div>
          )}

        
      </div>
    </nav>
  );
};

export default Navbar;