import { fetchCustomersPages, fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import Search from "@/app/ui/search";
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
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`text-2xl`}>Customers</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 md:mt-8">
                <Search placeholder="Search Customers..." />
            </div>
            <Suspense key={query + currentPage}>
                <CustomersTable customers={customers} />
            </Suspense>
        </div >
    );
}
