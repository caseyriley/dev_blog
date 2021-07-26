import React from 'react';

const defBusinessTypes = [
  "eco-accommodations",
  "ethical experiences",
  "Resposible Travel Curators",
  "socially responsible eateries",
];

const countryNames = [
  "Hong Kong",
  "India",
  "Indonesia",
  "Kenya",
  "Laos",
  "Malaysia",
  "Philippines",
  "United States Of America",
];

const country = {
  All: {
    BusinessTypes: [
      "eco-accommodations",
      "ethical experiences",
      "Resposible Travel Curators",
      "socially responsible eateries",
    ],
    Prices: ["$", "$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  "Hong Kong": {
    BusinessTypes: ["eco-accommodations"],
    Prices: ["$", "$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  India: {
    BusinessTypes: [
      "eco-accommodations",
      "ethical experiences",
      "Resposible Travel Curators",
      "socially responsible eateries",
    ],
    Prices: ["$", "$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  Indonesia: {
    BusinessTypes: ["eco-accommodations"],
    Prices: ["$", "$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  Kenya: {
    BusinessTypes: ["Responsible Travel Curators"],
    Prices: ["$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  Laos: {
    BusinessTypes: ["eco-accommodations"],
    Prices: ["$$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  Malaysia: {
    BusinessTypes: ["eco-accommodations"],
    Prices: ["$$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  Philippines: {
    BusinessTypes: ["eco-accommodations", "socially responsible eateries"],
    Prices: ["$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  "United States Of America": {
    BusinessTypes: ["eco-accommodations"],
    Prices: ["$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
};

export {defBusinessTypes, countryNames, country};