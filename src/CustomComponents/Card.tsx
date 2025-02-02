import * as React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import UploadFileIcon from '@mui/icons-material/UploadFile';

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


export default function OutlinedCard({ proyectName, exportData, importData }) {

  interface JsonContent {
    nodesExport: any;
    edgesExport: any;
  }

  const [jsonContent, setJsonContent] = useState<JsonContent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [nonError, setNonError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [showNonError, setShowNonError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (jsonContent) {
      setShowNonError(true);
      const timer = setTimeout(() => {
        setShowNonError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [jsonContent]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (file.type !== 'application/json') {
      setError('El archivo no es de tipo .JSON');
      setJsonContent(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        if (e.target && typeof e.target.result === 'string') {
          const parsedJson = JSON.parse(e.target.result);
          if (parsedJson.proyectName && parsedJson.nodesExport && parsedJson.edgesExport) {
            importData(parsedJson);
            setJsonContent(parsedJson);
            setNonError('Archivo importado correctamente.');
            setError(null);
          } else {
            setError('El archivo seleccionado no cumple con la estructura requerida');
            setNonError(null);
            setJsonContent(null);
          }
        } else {
          setError('El archivo no cumple con la estructura .JSON');
          setNonError(null);
          setJsonContent(null);
        }
      } catch (err) {
        setError('El archivo no cumple con la estructura .JSON');
        setNonError(null);
        setJsonContent(null);
      }
    };
    reader.readAsText(file);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          {showError && (
            <Paper sx={{ p: 2, mt: 2, maxWidth: 200, overflow: 'auto' }}>
              <Typography color="error" variant="body1" sx={{ mt: 2 }}>
                {error}
              </Typography>
            </Paper>
          )}
          {showNonError && (
            <Paper sx={{ p: 2, mt: 2, maxWidth: 200, overflow: 'auto' }}>
              <Typography color="green" variant="body1" sx={{ mt: 2 }}>
                {nonError}
              </Typography>
            </Paper>
          )}
          <List sx={{ height: "8%", overflow: 'auto', paddingTop: '0%', paddingBottom: '0%' }} dense>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <DownloadButton proyectName={proyectName} exportData={exportData} />
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => document.getElementById('fileInput')?.click()}>
                <ListItemIcon><UploadFileIcon /></ListItemIcon>
                <ListItemText primary='Importar Proyecto' />
                <input
                  type="file"
                  accept=".json"
                  hidden
                  onChange={handleFileChange}
                  id="fileInput"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}