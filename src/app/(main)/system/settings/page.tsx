import { Button } from "@requests/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@requests/components/ui/card";
import { Input } from "@requests/components/ui/input";
import { Label } from "@requests/components/ui/label";
import { Separator } from "@requests/components/ui/separator";
import { Switch } from "@requests/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">
          전역 시스템 환경설정 및 구성을 관리합니다.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>일반 설정</CardTitle>
            <CardDescription>
              기본 시스템 정보를 구성합니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">회사명</Label>
              <Input id="company-name" defaultValue="엔터넥스트" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="support-email">고객지원 이메일</Label>
              <Input id="support-email" defaultValue="support@enternext.com" />
            </div>
            <Button>변경사항 저장</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>알림 설정</CardTitle>
            <CardDescription>
              시스템 알림 및 이메일 수신 설정을 관리합니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>이메일 알림</Label>
                <p className="text-sm text-muted-foreground">
                  일일 요약 보고서를 이메일로 수신합니다.
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>시스템 경고</Label>
                <p className="text-sm text-muted-foreground">
                  중요 오류 발생 시 알림을 받습니다.
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
