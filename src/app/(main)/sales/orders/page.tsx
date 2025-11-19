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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@requests/components/ui/tabs";
import { PlusIcon, SearchIcon } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">주문 관리</h1>
          <p className="text-muted-foreground">
            고객 주문 내역 및 처리 상태를 관리합니다.
          </p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          주문 생성
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">전체 주문</TabsTrigger>
            <TabsTrigger value="pending">처리 대기</TabsTrigger>
            <TabsTrigger value="completed">완료됨</TabsTrigger>
          </TabsList>
          <div className="relative w-64">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="주문 검색..."
              className="pl-8"
            />
          </div>
        </div>

        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>최근 주문</CardTitle>
              <CardDescription>
                최근 접수된 판매 주문 및 현황입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>주문번호</TableHead>
                    <TableHead>고객사</TableHead>
                    <TableHead>날짜</TableHead>
                    <TableHead>금액</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead className="text-right">관리</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-001</TableCell>
                    <TableCell>(주)태양상사</TableCell>
                    <TableCell>2023-10-25</TableCell>
                    <TableCell>₩1,200,000</TableCell>
                    <TableCell>
                      <Badge variant="default">완료</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">상세</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#ORD-002</TableCell>
                    <TableCell>글로벌테크</TableCell>
                    <TableCell>2023-10-26</TableCell>
                    <TableCell>₩850,000</TableCell>
                    <TableCell>
                      <Badge variant="secondary">대기중</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">상세</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
