import { useState, useMemo } from "react";
import { ToolCard } from "@/components/ToolCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Image,
  Code,
  FileText,
  Scissors,
  Calendar,
  Grid3x3,
  Video,
  Link,
  Table,
  StickyNote,
  Eraser,
  Palette,
  QrCode,
  ScanLine,
  FileCode,
  FileEdit,
  CheckCircle,
  Search,
  Sparkles,
} from "lucide-react";

const tools = [
  {
    title: "Dự Báo Thời Tiết",
    description: "Xem dự báo thời tiết theo thời gian thực tối đa 5 ngày",
    url: "https://weatherdaily.pages.dev/",
    icon: Cloud,
    category: "Tiện ích",
  },
  {
    title: "Get Link Url Ảnh Google Drive",
    description: "Chuyển đổi link ảnh Google Drive để lấy Url ảnh trực tiếp",
    url: "https://imageurl.pages.dev/",
    icon: Image,
    category: "Công cụ",
  },
  {
    title: "Trình Beautify Code",
    description: "Trình làm đẹp mã (code beautifier) giúp định dạng lại mã HTML, CSS, JavaScript để dễ đọc, dễ bảo trì hơn.",
    url: "https://beautyfiercode.pages.dev/",
    icon: Code,
    category: "Developer",
  },
  {
    title: "Get Link Url Scribd",
    description: "Get link xem các file trên trên Scribd không cần đăng nhập tài khoản.",
    url: "https://scribdview.pages.dev/",
    icon: FileText,
    category: "Công cụ",
  },
  {
    title: "Chỉnh Sửa Ảnh Cơ Bản",
    description: "Chức năng cơ bản: chỉnh sửa kích thước, nén dung lượng, ghép ảnh, tạo ảnh thẻ.",
    url: "https://imgedit.pages.dev/",
    icon: Image,
    category: "Hình ảnh",
  },
  {
    title: "Cắt Khung Ảnh (Crop Image)",
    description: "Chức năng cắt ảnh cho phép người dùng loại bỏ các phần không mong muốn của hình ảnh.",
    url: "https://imagecrop.pages.dev/",
    icon: Scissors,
    category: "Hình ảnh",
  },
  {
    title: "Âm Dương Lịch",
    description: "Xem lịch âm dương, hỗ trợ tra cứu đổi lịch ngày Dương → Âm, Âm → Dương nhanh chóng.",
    url: "https://amduonglich.pages.dev/",
    icon: Calendar,
    category: "Tiện ích",
  },
  {
    title: "CSS Grid Generator",
    description: "CSS Grid Generator là công cụ trực quan giúp tạo bố cục lưới bằng CSS. Người dùng chỉ cần điều chỉnh số cột, hàng và khoảng cách; công cụ sẽ sinh ra mã HTML và CSS sẵn sàng để sao chép và sử dụng ngay vào dự án.",
    url: "https://cssgrid.pages.dev/",
    icon: Grid3x3,
    category: "Developer",
  },
  {
    title: "Video Downloader",
    description: "Tải xuống video Tiktok, Facebook, Douyin",
    url: "https://videodownloadpro.pages.dev/",
    icon: Video,
    category: "Media",
  },
  {
    title: "Checker Url Unshort",
    description: "Kiểm tra địa chỉ thật của những đường link đã bị rút gọn.",
    url: "https://unshortchecker.pages.dev/",
    icon: Link,
    category: "Công cụ",
  },
  {
    title: "Tạo Bảng HTML",
    description: "Tạo bảng dữ liệu bằng mã HTML một cách nhanh chóng.",
    url: "https://tablegenerator.pages.dev/",
    icon: Table,
    category: "Developer",
  },
  {
    title: "Trình ghi chú Note Pad",
    description: "Ghi chú mọi ý tưởng một cách nhanh chóng.",
    url: "https://speednote.pages.dev/",
    icon: StickyNote,
    category: "Tiện ích",
  },
  {
    title: "Xoá phông nền ảnh",
    description: "Xoá phông nền ảnh tuỳ chọn đơn giản",
    url: "https://removebgpro.pages.dev/",
    icon: Eraser,
    category: "Hình ảnh",
  },
  {
    title: "Color Generator",
    description: "Là trình tạo hệ màu chuyên sâu cho lập trình viên và nhà thiết kế UI, hỗ trợ xuất màu theo nhiều chuẩn (HEX, HSL, OKLCH) và tương thích với Tailwind, Ant Design, Radix UI.",
    url: "https://colorpalette.pages.dev/",
    icon: Palette,
    category: "Design",
  },
  {
    title: "Color Hex",
    description: "Là công cụ tạo bảng màu ngẫu nhiên và khám phá màu sắc thịnh hành. Phù hợp để tìm cảm hứng thiết kế và phối màu nhanh cho UI, logo, hoặc giao diện web (Chỉ HEX).",
    url: "https://palettego.pages.dev/",
    icon: Sparkles,
    category: "Design",
  },
  {
    title: "QR Generator Pro",
    description: "QR Generator Pro – Tạo mã QR miễn phí",
    url: "https://qrcodepro.pages.dev/",
    icon: QrCode,
    category: "Công cụ",
  },
  {
    title: "QR Scan Pro",
    description: "QR Scan Pro – Quét mã QR nhanh chóng và chính xác",
    url: "https://qrscanpro.pages.dev/",
    icon: ScanLine,
    category: "Công cụ",
  },
  {
    title: "Code Editor",
    description: "Code Editor – Viết, chạy và xem trước mã HTML, CSS, JavaScript ngay trên trình duyệt. Giao diện thân thiện, hỗ trợ Dark Mode, Copy, Paste và Run Code nhanh chóng",
    url: "https://codeboxpro.pages.dev/",
    icon: FileCode,
    category: "Developer",
  },
  {
    title: "Markdown Editor",
    description: "Người dùng có thể sử dụng các cú pháp Markdown như tiêu đề, in đậm, in nghiêng, danh sách, bảng, hoặc đoạn mã. Công cụ hỗ trợ xem trước tức thì, giúp bạn dễ dàng kiểm tra định dạng trước khi lưu hoặc xuất file.",
    url: "https://markdownpro.pages.dev/",
    icon: FileEdit,
    category: "Developer",
  },
  {
    title: "Check Tools",
    description: "IP Checker Tools là website cung cấp các công cụ kiểm tra IP và website miễn phí. Người dùng có thể xem địa chỉ IP công khai, tra cứu vị trí máy chủ, kiểm tra tình trạng hoạt động của website và thông tin kết nối mạng nhanh chóng, chính xác và dễ sử dụng.",
    url: "https://ipcheckertools.pages.dev/",
    icon: CheckCircle,
    category: "Công cụ",
  },
];

const categories = ["Tất cả", "Developer", "Hình ảnh", "Design", "Tiện ích", "Công cụ", "Media"];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Tất cả" || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with gradient background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Bộ công cụ web của tôi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tập hợp các công cụ web hữu ích được phát triển để giúp bạn làm việc hiệu quả hơn
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Search and filters */}
        <div className="mb-8 space-y-6">
          <div className="relative animate-scale-in">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Tìm kiếm công cụ... (Ctrl + /)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-card border-border focus:border-primary/50"
              onKeyDown={(e) => {
                if (e.ctrlKey && e.key === "/") {
                  e.preventDefault();
                }
              }}
            />
            {searchQuery && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <span className="text-sm text-muted-foreground">
                  <span className="text-primary font-semibold">{filteredTools.length}</span> kết quả
                </span>
              </div>
            )}
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Tools grid */}
        {filteredTools.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.title}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ToolCard {...tool} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Không tìm thấy công cụ phù hợp</h3>
            <p className="text-muted-foreground">Hãy thử tìm kiếm với từ khóa khác</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © 2025 Bộ công cụ web. Được phát triển với ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
