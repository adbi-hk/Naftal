import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { rows } from "../../data/datal";
import FormDialogLoc from "../../components/FormDialogLoc";
import FormDialog from "../../components/FormDialog";

const Locaux = () => {
  const theme = useTheme();

  // colums lazam ykonp kaynin / headername bach tkhayer column title
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "CODE_STATION",
      headerName: "CODE STATION",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "STATION",
      headerName: "STATION",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "BOUTIQUE",
      headerName: "BOUTIQUE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "NOM_BOUTIQUE",
      headerName: "NOM BOUTIQUE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "TYPE",
      headerName: "TYPE",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ETAT",
      headerName: "ETAT",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { ETAT } }) => {
        return (
          <Box
            sx={{
              textAlign: "center",
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              margin: "7.5px",
              backgroundColor:
                ETAT === "Occupé"
                  ? theme.palette.primary.dark
                  : theme.palette.success.dark,
            }}
          >
            <Typography sx={{ FontSize: "13px", color: "white" }}>
              {ETAT}
            </Typography>
          </Box>
        );
      },
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
                <p className="pt-2 text-2xl font-bold">LOCAUX</p>
                <Box flexGrow={1} />
                <FormDialogLoc />
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

export default Locaux;
