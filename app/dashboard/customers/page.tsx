import { fetchCustomersPages, fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Suspense } from "react";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchCustomersPages(query);
    const customers = await fetchFilteredCustomers(query);

    return (
        <Suspense key={query + currentPage}>
            <CustomersTable customers={customers} />
        </Suspense>
    );
}
