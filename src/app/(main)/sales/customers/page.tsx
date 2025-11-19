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
import { PlusIcon, SearchIcon } from "lucide-react";

export default function CustomersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">고객 관리</h1>
          <p className="text-muted-foreground">
            고객사 및 담당자 연락처 정보를 관리합니다.
          </p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          고객 추가
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="고객 검색..."
            className="pl-8"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>고객 목록</CardTitle>
          <CardDescription>
            등록된 모든 고객사 및 기업 목록입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>회사명</TableHead>
                <TableHead>담당자</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead>전화번호</TableHead>
                <TableHead className="text-right">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">테크솔루션</TableCell>
                <TableCell>김미영</TableCell>
                <TableCell>kim@tech.com</TableCell>
                <TableCell>010-1234-5678</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">수정</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">창의디자인</TableCell>
                <TableCell>박철수</TableCell>
                <TableCell>park@creative.com</TableCell>
                <TableCell>010-9876-5432</TableCell>
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
