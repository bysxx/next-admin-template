import { Badge } from "@requests/components/ui/badge";
import { Button } from "@requests/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@requests/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@requests/components/ui/table";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

export default function StockPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">재고 관리</h1>
          <p className="text-muted-foreground">
            재고 현황을 모니터링하고 조정합니다.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <ArrowUpIcon className="mr-2 h-4 w-4" />
            입고
          </Button>
          <Button variant="outline">
            <ArrowDownIcon className="mr-2 h-4 w-4" />
            출고
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">총 품목 수</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">부족 재고 품목</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">총 재고 가치</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₩45,231,000</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>현재 재고</CardTitle>
          <CardDescription>
            전체 창고의 실시간 재고 현황입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>품목명</TableHead>
                <TableHead>위치</TableHead>
                <TableHead>수량</TableHead>
                <TableHead>재발주점</TableHead>
                <TableHead>상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">무선 마우스</TableCell>
                <TableCell>제1창고</TableCell>
                <TableCell>150</TableCell>
                <TableCell>20</TableCell>
                <TableCell>
                  <Badge className="bg-green-500">정상</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">기계식 키보드</TableCell>
                <TableCell>제2창고</TableCell>
                <TableCell>5</TableCell>
                <TableCell>10</TableCell>
                <TableCell>
                  <Badge variant="destructive">부족</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
