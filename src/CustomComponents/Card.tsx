import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import UploadFileIcon from '@mui/icons-material/UploadFile';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import GetAppIcon from '@mui/icons-material/GetApp';

import DownloadButton from './DownloadButton.tsx';

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';


export default function OutlinedCard({ exportData, importData }) {

  interface JsonContent {
    nodesExport: any;
    edgesExport: any;
  }

  const [jsonContent, setJsonContent] = useState<JsonContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (file.type !== 'application/json') {
      setError('Error al cargar, selecciona un archivo JSON.');
      setJsonContent(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        if (e.target && typeof e.target.result === 'string') {
          const parsedJson = JSON.parse(e.target.result);
          setJsonContent(parsedJson);
          setError(null);
        } else {
          setError('El archivo no es un JSON válido.');
          setJsonContent(null);
        }
      } catch (err) {
        setError('El archivo no es un JSON válido.');
        setJsonContent(null);
      }
    };
    reader.readAsText(file);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <List sx={{ height: "8%", overflow: 'auto', paddingTop: '0%', paddingBottom: '0%' }} dense>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <DownloadButton />
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => exportData()}>
                <ListItemIcon><GetAppIcon /></ListItemIcon>
                <ListItemText primary='Exportar Proyecto' />
              </ListItemButton>
            </ListItem>
          </List>
          {error && (
            <Typography color="error" variant="body1" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          {jsonContent && (
            <Paper sx={{ p: 2, mt: 2, maxHeight: 200, overflow: 'auto' }}>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                Proyecto: {'\n'}
                Fecha: {jsonContent.date}{'\n'}
                Nodos: {jsonContent.nodesExport.length}{'\n'}
                Conexiones: {jsonContent.edgesExport.length}{'\n'}
              </Typography>
            </Paper>
          )}
          <List sx={{ height: "8%", overflow: 'auto', paddingTop: '0%', paddingBottom: '0%' }} dense>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => document.getElementById('fileInput')?.click()}>
                <ListItemIcon><UploadFileIcon /></ListItemIcon>
                <ListItemText primary='Seleccionar Archivo' />
                <input
                  type="file"
                  accept=".json"
                  hidden
                  onChange={handleFileChange}
                  id="fileInput"
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => { importData(jsonContent); setJsonContent(null); setError(null); }}>
                <ListItemIcon><SystemUpdateAltIcon /></ListItemIcon>
                <ListItemText primary='Cargar Proyecto' />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}