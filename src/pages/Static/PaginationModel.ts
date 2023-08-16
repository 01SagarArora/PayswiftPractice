import { PaginationData } from "../../components/Pagination/PaginationButton";
import { FilterTavelList } from "./TravelList.interface";

export const PaginationModel = {
    getPaginationData: function (responce: FilterTavelList) : PaginationData {
        const {
            startIndex,
            endIndex,
            nextPageLink,
            pageNumber,
            previousPageLink,
            recordInPages,
            totalPages,
            totalRecords } = responce
        return {
            startIndex,
            endIndex,
            nextPageLink,
            pageNumber,
            previousPageLink,
            recordInPages,
            totalPages,
            totalRecords
        }
    }
}