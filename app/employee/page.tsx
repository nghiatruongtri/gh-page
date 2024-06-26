import TableHeader from "@/component/table-header";
import TableRow from "@/component/table-row";
import ModalEditEmployee from "@/component/modal-edit-employee";
import ModalAddEmployee from "@/component/modal-add-employee";
import ModalDeleteEmployee from "@/component/modal-delete-employee";

export default function Employee(): React.JSX.Element {
  return (
    <>
      <TableHeader />
      <TableRow />
      <ModalEditEmployee />
      <ModalAddEmployee />
      <ModalDeleteEmployee />
    </>
  );
}
