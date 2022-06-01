import { Header } from "../components/Header";
import { TasksTable } from "../components/TableComponents/TasksTable";
import { useTableState } from "../hooks/useTableState";
import { LoadingBlock } from "../components/LoadingBlock";
import { ErrorBlock } from "../components/ErrorBlock";

export const HomePage: React.FC = () => {
  const { tableData, error, tableLoading, taskActions, formActions } =
    useTableState();

  if (tableLoading) return <LoadingBlock />;

  if (error) return <ErrorBlock />;

  return (
    <>
      <Header data={tableData} actions={formActions} />
      <div className="padded-div">
        <TasksTable taskActions={taskActions} tableData={tableData} />
      </div>
    </>
  );
};
