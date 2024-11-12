"use client";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface SidebarProps {
  categories: Items[];
}

interface Items {
  main: string;
  sub: string[];
}

const SubItem = ({
  open,
  mainCategory,
  subCategory,
}: {
  open: boolean;
  mainCategory: string;
  subCategory: string;
}) => {
  const searchParams = useSearchParams();
  const pathCategory = searchParams.get("category");
  return (
    <Link
      href={{
        pathname: `/posts/${mainCategory.toLowerCase()}`,
        query: { category: subCategory.toLowerCase() },
      }}
      key={subCategory}
      className={`sub-category ${open ? "open" : ""}  ${
        pathCategory === subCategory.toLowerCase() ? "active" : ""
      }`}
    >
      {subCategory}
    </Link>
  );
};

const SideBarItem = ({ main, sub }: Items) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Link href={"#"} className="main-category" onClick={() => setOpen(!open)}>
        {main}
      </Link>
      {sub?.map((subCategory) => (
        <SubItem
          key={subCategory}
          open={open}
          mainCategory={main}
          subCategory={subCategory}
        />
      ))}
    </div>
  );
};

const Sidebar = ({ categories }: SidebarProps) => {
  return (
    <nav className="sidebar">
      <h3 className="title">Indice</h3>
      <ul key={"mainul"}>
        {categories.map((category) => (
          <SideBarItem
            key={category.main}
            main={category.main}
            sub={category.sub}
          />
        ))}
      </ul>
    </nav>
  );
};

export { Sidebar };
