"use client";

import { TwitterPicker, ColorResult } from "react-color";

type Props = {
  onChangeComplete: (color: ColorResult) => void;
  color?: string;
};

export default function ColorPickerWrapper({
  onChangeComplete,
  color = "#22194D",
}: Props) {
  return (
    <div className="flex flex-col items-center">
    <TwitterPicker
      width="90%"
      color={color}
      colors={[
        "#FFFFFF", // branco
        "#000000", // preto
        "#F5F5F5", // cinza claro
        "#E5E7EB", // gray-200 (Tailwind)
        "#D1D5DB", // gray-300
        "#9CA3AF", // gray-400
        "#6B7280", // gray-500
        "#4B5563", // gray-600
        "#374151", // gray-700
        "#1F2937", // gray-800
        "#111827", // gray-900
        "#3B82F6", // azul (blue-500)
        "#2563EB",
        "#1D4ED8",
        "#1E40AF",
        "#1E3A8A",
        "#60A5FA",
        "#93C5FD",
        "#BFDBFE",
        "#DBEAFE",
        "#EFF6FF",
        "#10B981", // green-500
        "#059669",
        "#047857",
        "#065F46",
        "#34D399",
        "#6EE7B7",
        "#A7F3D0",
        "#D1FAE5",
        "#ECFDF5",
        "#EF4444", // red-500
        "#DC2626",
        "#B91C1C",
        "#991B1B",
        "#F87171",
        "#FCA5A5",
        "#FECACA",
        "#FEE2E2",
        "#FEF2F2",
        "#F59E0B", // amber-500
        "#D97706",
        "#B45309",
        "#78350F",
        "#FBBF24",
        "#FCD34D",
        "#FDE68A",
        "#FEF3C7",
        "#FFFBEB",
        "#8B5CF6", // violet-500
        "#7C3AED",
        "#6D28D9",
        "#5B21B6",
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE",
        "#F5F3FF",
        "#6366F1", // indigo-500
        "#4F46E5",
        "#4338CA",
        "#3730A3",
        "#A5B4FC",
        "#C7D2FE",
        "#E0E7FF",
        "#EEF2FF",
        "#14B8A6", // teal/cyan-500
        "#06B6D4",
        "#0891B2",
        "#0E7490",
        "#22D3EE",
        "#67E8F9",
        "#A5F3FC",
        "#ECFEFF",
        "#FFEE58", // amarelo suave (Material Yellow 400)
        "#FFD54F", // amarelo pastel
        "#FFCA28",
        "#FFC107", // Bootstrap warning
        "#FFB300",
        "#FFA000",
        "#FF8F00",
        "#F57C00",
        "#FF7043", // laranja coral
        "#FF5722", // Material deep orange
        "#FF5252",
        "#FF1744",
        "#D50000",
        "#C62828", // vermelho escuro
        "#AD1457", // rosa escuro
        "#E91E63", // rosa vibrante
        "#F06292", // rosa médio
        "#CE93D8", // lilás
        "#BA68C8", // roxo claro
        "#9C27B0", // roxo padrão Material
        "#7B1FA2", // roxo escuro
        "#512DA8",
        "#3F51B5", // azul Material
        "#2196F3", // azul claro
        "#00BCD4", // ciano Material
        "#009688", // teal escuro
        "#A1887F", // marrom claro
        "#795548", // marrom tradicional
        "#5D4037", // marrom escuro
        "#3E2723", // marrom profundo
        "#B0BEC5", // cinza azulado claro
        "#90A4AE", // cinza azulado médio
        "#607D8B", // cinza azulado escuro
        "#455A64",
        "#263238",
        "#ECEFF1", // cinza super claro
        "#CFD8DC",
        "#B2EBF2", // ciano muito claro
        "#80DEEA",
        "#4DD0E1",
        "#26C6DA",
        "#00ACC1",
        "#00838F",
        "#006064",
        "#F5F5F5", // branco esfumaçado
        "#FAFAFA",
        "#EEEEEE",
        "#E0E0E0",
        "#BDBDBD",
        "#9E9E9E",
        "#757575",
        "#616161",
        "#424242",
        "#212121",
        "#1A237E", // azul índigo profundo
        "#311B92", // roxo profundo
      ]}
      onChangeComplete={onChangeComplete}
      triangle="hide"
    />
    </div>
  );
}
