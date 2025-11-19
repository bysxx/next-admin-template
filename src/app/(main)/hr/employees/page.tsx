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

export default function EmployeesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">직원 관리</h1>
          <p className="text-muted-foreground">
            직원 정보, 역할 및 소속 부서를 관리합니다.
          </p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          직원 등록
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="직원 검색..."
            className="pl-8"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>직원 목록</CardTitle>
          <CardDescription>
            모든 직원의 이름, 역할, 상태를 포함한 목록입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>이름</TableHead>
                <TableHead>이메일</TableHead>
                <TableHead>직책</TableHead>
                <TableHead>부서</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">홍길동</TableCell>
                <TableCell>hong@example.com</TableCell>
                <TableCell>개발자</TableCell>
                <TableCell>기술연구소</TableCell>
                <TableCell>재직중</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">수정</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">김철수</TableCell>
                <TableCell>kim@example.com</TableCell>
                <TableCell>매니저</TableCell>
                <TableCell>인사팀</TableCell>
                <TableCell>재직중</TableCell>
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
