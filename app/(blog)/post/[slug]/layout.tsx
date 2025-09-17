import BottomSheetLayout from "@/widgets/bottom-sheet/ui/bottom-sheet-layout";

interface PostDetailLayoutProps {
  children: React.ReactNode;
}

export default function PostDetailLayout({ children }: PostDetailLayoutProps) {
  return <BottomSheetLayout>{children}</BottomSheetLayout>;
}
