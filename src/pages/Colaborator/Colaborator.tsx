import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { rows } from "../../data/datac";
import FormDialog from "../../components/FormDialog";

const Colaborator = () => {
  const theme = useTheme();
  // colums lazam ykonp kaynin / headername bach tkhayer column title
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "CODE_OPERATEUR",
      headerName: "CODE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "RAISON_SOCIALE",
      headerName: "RAISON SOCIALE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ADRESSE",
      headerName: "ADRESSE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "DOMICILIATION",
      headerName: "DOMICILIATION",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ACTION",
      headerName: "ACTION",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <>
      <div>
        <div className="rounded-lg pb-4 shadow">
          <div className=" px-1 grid gap-3 grid-cols-12">
            <div className="col-span-12 h-20 p-4 rounded border border-stone-700">
              <div
                className="flex"
                style={{
                  color: theme.palette.primary.dark,
                }}
              >
                <p className="pt-2 text-2xl font-bold">CLIENTS</p>
                <Box flexGrow={1} />
                <FormDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ height: 650, width: "100%", mx: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          showToolbar
        />
      </Box>
    </>
  );
};

export default Colaborator;
