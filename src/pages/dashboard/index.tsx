import { useUser } from "@clerk/clerk-react";
import { FinancialRecordList } from "./Financial-record-list";
import { FinancialRecordForm } from "./Financial-record-form";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/Financial-record-context";
import { useMemo } from "react";
export function Dashboard() {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    return records.reduce((acc, record) => acc + record.amount, 0);
  }, [records]);

  return (
    <div className="dashboard-container">
      <h1>welcome {user?.firstName} Here are your Finance:</h1>
      <FinancialRecordForm />
      <div>Total money spent: {totalMonthly}</div>
      <FinancialRecordList />
    </div>
  );
}
