import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../button";

interface IPaginateProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}: Readonly<IPaginateProps>) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full dark:bg-black dark:text-white"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <span className="text-sm font-medium dark:text-white">
        {currentPage} / {totalPages}
      </span>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full dark:bg-black dark:text-white"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
