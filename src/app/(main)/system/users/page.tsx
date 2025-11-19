import { Avatar, AvatarFallback, AvatarImage } from "@requests/components/ui/avatar";
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
import { PlusIcon, SearchIcon } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">사용자 관리</h1>
          <p className="text-muted-foreground">
            시스템 접근 권한 및 사용자를 관리합니다.
          </p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          사용자 초대
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="사용자 검색..."
            className="pl-8"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>시스템 사용자</CardTitle>
          <CardDescription>
            ERP 시스템에 접근 가능한 사용자 목록입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>사용자</TableHead>
                <TableHead>권한</TableHead>
                <TableHead>최근 접속</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>관리자</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">관리자</div>
                </TableCell>
                <TableCell>최고관리자</TableCell>
                <TableCell>방금 전</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-green-600 border-green-600">활성</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">설정</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>김</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">김철수</div>
                </TableCell>
                <TableCell>편집자</TableCell>
                <TableCell>2시간 전</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-green-600 border-green-600">활성</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">설정</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
