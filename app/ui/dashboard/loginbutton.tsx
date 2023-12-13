import { signOut } from "@/auth";
import { Button } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


export default function LoginButton() {
  return(
      <Button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" onClick={async () => {
        'use server';
        await signOut();
      }}>
        <PowerSettingsNewIcon className="w-6" />
        <div className="hidden md:block">Sign Out</div>
      </Button>
  );
}