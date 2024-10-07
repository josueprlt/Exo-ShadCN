import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table"

export function Table2() {
  return (
    <Table className="w-full">
      <TableCaption>To Do List Exemple</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Tâche</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          <TableRow>
            <TableCell className="font-medium">test</TableCell>
            <TableCell className="text-center">test</TableCell>
          </TableRow>
      </TableBody>
    </Table>
  )
}