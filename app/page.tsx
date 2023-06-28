
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { db } from '@/lib/db'


import { Button } from "@/components/ui/button"


interface data {
  title: string,
  spent: number
  goal: number
  percentage: number
}

const data = [
  {
    title: "Total Earnings",
    spent: -10,
    goal: 10000,
    percentage: 45
  },
  {
    title: "Food Cost",
    spent: 100,
    goal: 300,
    percentage: 60
  },
  {
    title: "Labor Cost",
    spent: 300,
    goal: 200,
    percentage: 100
  }
];









export default async function Home() {
  const tableData = db.invoice.findMany({})





  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-6 gap-10 w-full h-full">
        {data.map((item) => (
          <Card className="col-span-2 border-y-orange-200">
            <CardHeader className="items-center justify-center text-xl underline">
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-cols justify-center items-center  gap-2 pb-2 text-xl font-bold">
                <h1 className="text-3xl font-bold">{item.spent} ₪</h1>
                {item.spent > 0 &&(
                  <div className="w-0.4 h-0.2 mb-10">
                  <Badge className="bg-green-500">+ {item.spent}%</Badge>
                  </div>
                )}
                {item.spent < 0 &&(
                  <div className="w-0.4 h-0.2 mb-10">
                  <Badge className="bg-red-500">+ {item.spent}%</Badge>
                  </div>
                )}
                
                 
               
              </div>
              <div className="flex flex-cols h-full w-full items-center justify-center gap-2">

                <h3 className="text-md  font-bold">{item.spent}</h3>

                <Progress value={item.percentage} />
                <h3 className="text-md font-bold">{item.goal}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card className="col-span-6 items-center">
          <Table>
            <TableHeader>
              <Button className="mt-2 ml-2 bg-green-600" onClick={console.log("vlad")}> Add invoice</Button>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">InvoiceNumber</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
            {tableData && (await tableData).map((Tableitem)=>
                       <TableRow>
                       <TableCell className="font-medium">{Tableitem.Date}</TableCell>
                       <TableCell>{Tableitem.cost}$</TableCell>
                       <TableCell>{Tableitem.company}</TableCell>
                       <TableCell className="text-right">#{Tableitem.invoiceNumber}</TableCell>
                     </TableRow> 
                    )}

            
           
            </TableBody>
          </Table>


        </Card>


      </div>








    </main>
  )
}
