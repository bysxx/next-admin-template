import { Badge } from "@requests/components/ui/badge";
import { Button } from "@requests/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@requests/components/ui/card";
import { Input } from "@requests/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@requests/components/ui/table";
import { FilterIcon, PlusIcon, SearchIcon } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">품목 관리</h1>
          <p className="text-muted-foreground">
            제품 카탈로그 및 가격 정보를 관리합니다.
          </p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          품목 추가
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="품목 검색..."
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="icon">
          <FilterIcon className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>품목 카탈로그</CardTitle>
          <CardDescription>
            재고에 등록된 모든 품목의 상세 정보입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>품목명</TableHead>
                <TableHead>카테고리</TableHead>
                <TableHead>단가</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">PROD-001</TableCell>
                <TableCell>무선 마우스</TableCell>
                <TableCell>전자제품</TableCell>
                <TableCell>₩25,000</TableCell>
                <TableCell>
                  <Badge variant="outline">판매중</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">수정</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">PROD-002</TableCell>
                <TableCell>기계식 키보드</TableCell>
                <TableCell>전자제품</TableCell>
                <TableCell>₩89,000</TableCell>
                <TableCell>
                  <Badge variant="outline">판매중</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">수정</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
