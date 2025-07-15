declare var $SP: {
    (): SharepointPlus
}

declare class SharepointPlus {
    whoami: (options?: { url: string }) => Promise<any>;
    groupMembers: (groupName: string, options?: { url: string }) => Promise<any>;
    isMember: (option: Record<string, any>) => Promise<any>;
    cleanResult: (res: any) => void;
    list: (listName: string, url?: string) => ListFunctions;
    getUserInfo: (user: string, option: CommonOption) => Promise<any>;
    getManager: (user: string, option: CommonOption) => Promise<any>;
    toXSLString(value: string): string;
    toDate(textDate: string, forceUTC?: boolean): string;
    toSPDate(dateObject: Date, includeTime?:boolean):string;
}

interface CommonOption {
    url?: string;

}


declare class ListFunctions {
    get: (options?: ListOptions) => Promise<any[]>;    
    add: (object: AddUpdateItem, options: AddUpdateOptions) => Promise<AddUpdateResult>;
    udpate: (object: AddUpdateItem, options?: AddUpdateOptions) => Promise<AddUpdateResult>;    
    remove: (itemsId: DeleteItemID | ItemsIDArray, option?: DeleteItemID) => Promise<boolean>;    
    addAttachment: (options: AddAttachmentSetupOptions) => Promise<string>;
    createFolder: (path) => Promise<any>;
    createFile: (option: any) => Promise<any>;
    info: () => Promise<any>;
    startWorkflow: (setup: StartWorkflowSetup) => Promise<void>;
    view: (viewNameOrId: string, cache?: boolean) => Promise<void>;
}

interface WorkflowParameter {
    name: string;
    value: string;
}

interface StartWorkflowSetup {
    workflowName: string;
    ID?: number;
    parameters?: WorkflowParameter[] | Record<string, any>;
    fileRef?: string;
    workflowID?: string;
}



interface AddUpdateOptions {
    packetsize?: number; // Default: 30
    progress?: (current: number, max: number) => void;
    breakOnFailure?: boolean; // Default: false
    escapeChar?: boolean; // Default: true
    rootFolder?: string; // For Discussion Board replies
}


type AddUpdateItem = Record<string, any>;


interface AddUpdateResult {
    passed: any[]; // Array of successfully added items (type can be refined)
    failed: any[]; // Array of failed items (type can be refined)
}

interface DeleteItemID {
    ID: number,
    FileRef?: string, // Required if deleting a file, the server-relative path to the file
}

interface DeleteOptions {
    where?: string,
    packetsize?: number, // Default: 30
    progress?: (current: number, max: number) => void,
    breakOnFailure?: boolean, // Default: false
    event?: string | Date,
}

type ItemsIDArray = DeleteItemID[];

type DeleteReturnType = any; // Update this if you know the return shape

/**
 * Delete items or files from a SharePoint list.
 * @param itemsID List of item IDs or item/file objects. Required unless using `options.where`.
 * @param options Additional delete options.
 * @returns Promise with delete operation result.
 */
function deleteItems(
    itemsID?: ItemsIDArray,
    options?: DeleteOptions
): Promise<DeleteReturnType>;

interface AddAttachmentSetupOptions {
    ID: number,                // The item ID to attach the file
    filename: string,          // The name of the file
    attachment: ArrayBuffer   // The file content as array buffer
}

// OptionalOptions interface for $SP().list().get() method
interface FolderOptions {
    path?: string, // Relative path of the folder to explore
    show?: "FilesOnly_Recursive" | "FilesAndFolders_Recursive" | "FilesOnly_InFolder" | "FilesAndFolders_InFolder",
    rootFolder?: string, // Full URL to the document library root
}

interface JoinOptions {
    list?: string,
    url?: string,
    on?: string,
    onLookup?: string,
    outer?: boolean,
}

interface CalendarOptions {
    splitRecurrence?: boolean,
    referenceDate?: string | Date;
    range?: "Month" | "Week";
}

interface ListOptions {
    fields?: string,
    view?: string,
    viewCache?: boolean,
    json?: boolean,
    where?: string | string[];
    whereCAML?: boolean,
    whereEscapeChar?: boolean,
    whereFct?: (w: string) => string,
    progress?: (...args: any[]) => void,
    orderby?: string,
    groupby?: string,
    rowlimit?: number,
    paging?: boolean,
    page?: number,
    listItemCollectionPositionNext?: string,
    useIndexForOrderBy?: boolean,
    expandUserField?: boolean,
    dateInUTC?: boolean,
    showListInAttribute?: boolean,
    alias?: string,
    merge?: Array<OptionalOptions>,
    folderOptions?: FolderOptions,
    queryOptions?: boolean | string, // boolean or custom XML string
    join?: JoinOptions,
    calendar?: boolean,
    calendarOptions?: CalendarOptions,
}  