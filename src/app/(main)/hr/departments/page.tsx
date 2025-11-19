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
import { PlusIcon } from "lucide-react";

export default function DepartmentsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">부서 관리</h1>
          <p className="text-muted-foreground">
            조직 구조 및 부서 정보를 관리합니다.
          </p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          부서 추가
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              총 부서 수
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              총 인원
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>부서 현황</CardTitle>
          <CardDescription>
            모든 부서 목록 및 부서장 정보입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>부서명</TableHead>
                <TableHead>부서장</TableHead>
                <TableHead>인원 수</TableHead>
                <TableHead className="text-right">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">기술연구소</TableCell>
                <TableCell>박지성</TableCell>
                <TableCell>45</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">상세보기</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">인사팀</TableCell>
                <TableCell>이영표</TableCell>
                <TableCell>8</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">상세보기</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
