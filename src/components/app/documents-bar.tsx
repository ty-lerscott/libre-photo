import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DocumentsBar = () => {
  return (
    <div className="flex items-center bg-[#2a2a2a] border-b border-[#3a3a3a] px-2">
      <Tabs defaultValue="document1" className="w-full">
        <TabsList className="bg-transparent h-8">
          <TabsTrigger
            value="document1"
            className="h-7 data-[state=active]:bg-[#3a3a3a] text-white"
          >
            document1.psd
          </TabsTrigger>
          <TabsTrigger
            value="document2"
            className="h-7 data-[state=active]:bg-[#3a3a3a] text-gray-500"
          >
            document2.psd
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default DocumentsBar;
