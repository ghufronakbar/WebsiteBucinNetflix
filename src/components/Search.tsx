import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchProps {
  isVisible: boolean;
  onClose: () => void;
}

const Search = ({ isVisible, onClose }: SearchProps) => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const currentParams = new URLSearchParams(searchParams.toString());

    if (search) {
      currentParams.set("search", search);
    } else {
      currentParams.delete("search");
    }

    const newUrl = `${pathname}?${currentParams.toString()}`;

    router.push(newUrl);
    setSearch("");

    onClose();
  };

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-all duration-300 backdrop-blur-sm`}
      onClick={onClose}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full py-4 px-8 rounded-full bg-lightGray text-black outline-none placeholder:text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoSearch
          className="absolute top-1/2 right-4 -translate-y-1/2 text-black text-5xl cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-2xl w-6 h-6"
          onClick={handleSearch}
        />
      </form>
    </div>
  );
};

export default Search;
