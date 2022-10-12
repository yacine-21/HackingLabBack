#!/bin/bash
echo "**********************************"
echo "*     Nmap Full Port Scanning    *"
echo "*   Code Written by : Yacine-21  *"
echo "**********************************"
echo "IP Adress/Hostname: $1";
file="public/results.txt"
nmap $1 > $file
echo "******* Scanning done ************"
echo "**********************************"
exit 0

